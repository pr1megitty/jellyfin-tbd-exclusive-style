using System.Text.RegularExpressions;
using MediaBrowser.Common.Configuration;
using Microsoft.Extensions.Logging;

namespace TbdExclusivePlugin.Helpers;

public static class DirectScriptInjector
{
    public static bool TryInject(IApplicationPaths applicationPaths, string basePath, ILogger logger)
    {
        if (string.IsNullOrWhiteSpace(applicationPaths.WebPath))
        {
            logger.LogWarning("Jellyfin web path is unavailable; direct TBD Exclusive Style injection cannot be used.");
            return false;
        }

        string indexFile = Path.Combine(applicationPaths.WebPath, "index.html");

        try
        {
            if (!File.Exists(indexFile))
            {
                logger.LogWarning("Jellyfin web index was not found at {IndexFile}.", indexFile);
                return false;
            }

            string scriptElement = ScriptMarkup.Build(basePath, "injection=\"true\"");
            string indexContents = File.ReadAllText(indexFile);
            if (indexContents.Contains(scriptElement, StringComparison.Ordinal))
            {
                logger.LogInformation("Found TBD Exclusive Style client script in {IndexFile}.", indexFile);
                return true;
            }

            indexContents = ScriptMarkup.RemoveExisting(indexContents);
            int bodyClosing = indexContents.LastIndexOf("</body>", StringComparison.OrdinalIgnoreCase);
            if (bodyClosing < 0)
            {
                logger.LogWarning("Could not find a closing body tag in {IndexFile}.", indexFile);
                return false;
            }

            indexContents = indexContents.Insert(bodyClosing, scriptElement);
            File.WriteAllText(indexFile, indexContents);
            logger.LogInformation("Injected TBD Exclusive Style client script into {IndexFile}.", indexFile);
            return true;
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to inject TBD Exclusive Style client script into {IndexFile}.", indexFile);
            return false;
        }
    }
}

public static partial class ScriptMarkup
{
    [GeneratedRegex("<script\\b(?=[^>]*\\bplugin=([\"'])TbdExclusive\\1)[^>]*>\\s*</script>", RegexOptions.IgnoreCase)]
    private static partial Regex ExistingScriptRegex();

    public static string Build(string basePath, string markerAttribute)
    {
        return $"<script {markerAttribute} plugin=\"TbdExclusive\" defer=\"defer\" src=\"{basePath}/TbdExclusive/script\"></script>";
    }

    public static string RemoveExisting(string contents)
    {
        return ExistingScriptRegex().Replace(contents, string.Empty);
    }
}
