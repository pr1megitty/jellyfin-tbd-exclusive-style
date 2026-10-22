using System.Reflection;
using System.Runtime.Loader;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace TbdExclusivePlugin.Helpers;

public static class FileTransformationRegistrar
{
    private const string PluginInterfaceTypeName = "Jellyfin.Plugin.FileTransformation.PluginInterface";
    private const string TransformationId = "773cd3e7-9ecf-4366-aaf1-eea4a07549f4";

    public static bool TryRegister(ILogger logger)
    {
        try
        {
            Assembly? assembly = AssemblyLoadContext.All
                .SelectMany(context => context.Assemblies)
                .FirstOrDefault(candidate =>
                    candidate.FullName?.Contains(".FileTransformation", StringComparison.OrdinalIgnoreCase) ?? false);

            if (assembly is null)
            {
                logger.LogDebug("File Transformation plugin was not found.");
                return false;
            }

            Type? pluginInterfaceType = assembly.GetType(PluginInterfaceTypeName);
            MethodInfo? registerMethod = pluginInterfaceType?.GetMethod("RegisterTransformation");
            if (registerMethod is null)
            {
                logger.LogWarning("File Transformation registration interface was not found.");
                return false;
            }

            JObject payload = new JObject
            {
                { "id", TransformationId },
                { "fileNamePattern", "index.html" },
                { "callbackAssembly", typeof(FileTransformationRegistrar).Assembly.FullName },
                { "callbackClass", typeof(Transformations).FullName },
                { "callbackMethod", nameof(Transformations.IndexTransformation) }
            };

            object? result = registerMethod.Invoke(null, new object?[] { payload });
            if (result is false)
            {
                logger.LogWarning("File Transformation rejected the TBD Exclusive Style registration.");
                return false;
            }

            logger.LogInformation("TBD Exclusive Style registered with File Transformation.");
            return true;
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to register TBD Exclusive Style with File Transformation.");
            return false;
        }
    }
}
