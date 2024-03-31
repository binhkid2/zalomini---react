//DateTimeConvert.ts
export function DateTimeConvertEng(dateString: string) {
  
    // Parse the dateString to create a Date object
    const date = new Date(dateString);
  
    // Check if the parsed date is valid
    if (isNaN(date.getTime())) {
      // Return an error message if the date is invalid
      return 'Invalid date';
    }
  
    const now = new Date();
  
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  }
  
  

  //DateTimeConvert.ts
export function DateTimeConvertVi(dateString: string) {
    // Parse the dateString to create a Date object
    const date = new Date(dateString);
  
    // Check if the parsed date is valid
    if (isNaN(date.getTime())) {
      // Return an error message if the date is invalid
      return 'Invalid date';
    }
  
    const now = new Date();
  
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} ngày trước`;
    } else if (hours > 0) {
      return `${hours} giờ trước`;
    } else if (minutes > 0) {
      return `${minutes} phút trước`;
    } else {
      return `${seconds} giây trước`;
    }
  }
  
