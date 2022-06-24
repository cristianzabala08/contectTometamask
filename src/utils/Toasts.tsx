import toast from 'solid-toast';

function ToastColor(color: string): string {
  switch (color.toLowerCase()) {
    case "danger": return "#f44336";
    case "success": return "#4caf50";
    case "warning": return "#ff9800";
    case "info": return "#2196f3";
    default: return "#4caf50";
    }
}

function ToastIcon(color: string): string {
    switch (color.toLowerCase()) {
        case "error": return "❌";
        case "success": return "✔️";
        case "warning": return "⚠️";
        case "info": return "💡";
        default: return "⛔";
    }
}

function Toast (bg:string, description:string){
    toast(description, {
        duration: 5000,
        position: 'top-right',
        // Add a delay before the toast is removed
        // This can be used to time the toast exit animation
        unmountDelay: 500,
        // Styling - Supports CSS Objects, classes, and inline styles
        // Will be applied to the toast container
        style: {
          'background-color': ToastColor(bg),
        },
        className: 'my-custom-class',
        // Custom Icon - Supports text as well as JSX Elements
        icon: ToastIcon(bg),
        // Set accent colors for default icons that ship with Solid Toast
        iconTheme: {
          primary: '#fff',
          secondary: '#000',
        },
        // Set accent colors for custom icons that you may add to your toast   
      })   
} 

export {Toast as ToastServices};