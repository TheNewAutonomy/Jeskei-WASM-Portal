using Microsoft.AspNetCore.Components;
using System;

namespace JeskeiPortal.Client.Pages
{
    public partial class Channels : IDisposable
    {
        [Inject]
        public NavigationManager NavigationManager { get; set; } = default!;

        private void NavigationManager_LocationChanged(object? sender, Microsoft.AspNetCore.Components.Routing.LocationChangedEventArgs e)
        {
        }

        void IDisposable.Dispose()
        {
            // Unsubscribe from the event when our component is disposed
            NavigationManager.LocationChanged -= NavigationManager_LocationChanged;
        }
    }
}
