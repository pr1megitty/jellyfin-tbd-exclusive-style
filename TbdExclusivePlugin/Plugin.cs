using MediaBrowser.Common.Plugins;
using TbdExclusivePlugin.Configuration;
using MediaBrowser.Model.Plugins;
using MediaBrowser.Common.Configuration;
using MediaBrowser.Model.Serialization;
using System.Globalization;
using Microsoft.Extensions.Logging;
using MediaBrowser.Model.Configuration;
using MediaBrowser.Controller.Configuration;

namespace TbdExclusivePlugin;

public class Plugin : BasePlugin<PluginConfiguration>, IHasWebPages
{
    private readonly ILogger _logger;
    public IServiceProvider ServiceProvider { get; }

    public IServerConfigurationManager ServerConfigurationManager { get; }

    public Plugin(IApplicationPaths applicationPaths, IXmlSerializer xmlSerializer, ILogger<Plugin> logger, IServiceProvider serviceProvider, IServerConfigurationManager serverConfigurationManager) : base(applicationPaths, xmlSerializer)
    {
        Instance = this;
        _logger = logger;
        ServiceProvider = serviceProvider;
        ServerConfigurationManager = serverConfigurationManager;
    }
    public override string Name => "TBD Exclusive Style";

    public override Guid Id => Guid.Parse("f941e6d6-600a-474d-83bd-8e979e8747a0");

    public override string Description => "TorrentBD-style poster carousel (Primary images) for the Jellyfin home page.";

    public static Plugin? Instance { get; private set; } = null!;

    public IEnumerable<PluginPageInfo> GetPages()
    {
        return new[] {
            new PluginPageInfo {
                Name = "TbdExclusive",
                EmbeddedResourcePath = string.Format(CultureInfo.InvariantCulture, "{0}.Configuration.configPage.html", GetType().Namespace)
            }
        };
    }
}