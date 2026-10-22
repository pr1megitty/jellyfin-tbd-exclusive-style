using System.Reflection;
using System.Runtime.Loader;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace TbdExclusivePlugin.Helpers;

public static class JavaScriptInjectorRegistrar
{
    private const string AssemblyName = "Jellyfin.Plugin.JavaScriptInjector";
    private const string PluginInterfaceTypeName = "Jellyfin.Plugin.JavaScriptInjector.PluginInterface";
    private const string ScriptId = "f941e6d6-600a-474d-83bd-8e979e8747a0-tbd-exclusive";

    public static bool TryRegister(string basePath, ILogger logger)
    {
        try
        {
            Plugin? plugin = Plugin.Instance;
            if (plugin is null)
            {
                logger.LogWarning("TBD Exclusive Style plugin instance was not available for JavaScript Injector registration.");
                return false;
            }

            Assembly? assembly = AssemblyLoadContext.All
                .SelectMany(context => context.Assemblies)
                .FirstOrDefault(candidate =>
                    candidate.FullName?.Contains(AssemblyName, StringComparison.OrdinalIgnoreCase) ?? false);

            if (assembly is null)
            {
                logger.LogDebug("JavaScript Injector plugin was not found.");
                return false;
            }

            Type? pluginInterfaceType = assembly.GetType(PluginInterfaceTypeName);
            MethodInfo? registerMethod = pluginInterfaceType?.GetMethod("RegisterScript");
            if (registerMethod is null)
            {
                logger.LogWarning("JavaScript Injector registration interface was not found.");
                return false;
            }

            JObject payload = new JObject
            {
                { "id", ScriptId },
                { "name", "TBD Exclusive Style loader" },
                { "script", BuildLoaderScript(basePath) },
                { "enabled", true },
                { "requiresAuthentication", false },
                { "pluginId", plugin.Id.ToString() },
                { "pluginName", plugin.Name },
                { "pluginVersion", typeof(JavaScriptInjectorRegistrar).Assembly.GetName().Version?.ToString() ?? string.Empty }
            };

            object? result = registerMethod.Invoke(null, new object?[] { payload });
            if (result is not true)
            {
                logger.LogWarning("JavaScript Injector rejected the TBD Exclusive Style registration.");
                return false;
            }

            logger.LogInformation("TBD Exclusive Style registered with JavaScript Injector.");
            return true;
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to register TBD Exclusive Style with JavaScript Injector.");
            return false;
        }
    }

    public static string BuildLoaderScript(string basePath)
    {
        string scriptUrl = JsonConvert.SerializeObject($"{basePath}/TbdExclusive/script");

        return $$"""
            (() => {
                'use strict';

                if (document.querySelector('script[plugin="TbdExclusive"], script[data-plugin="TbdExclusive"]')) {
                    return;
                }

                const script = document.createElement('script');
                script.defer = true;
                script.dataset.plugin = 'TbdExclusive';
                script.src = {{scriptUrl}};
                (document.head || document.documentElement).appendChild(script);
            })();
            """;
    }
}
