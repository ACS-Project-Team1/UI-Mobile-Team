export function formatDate(dateString) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    const day = date.getDate();
  
    const formattedDate = `${months[monthIndex]} ${day.toString().padStart(2, '0')}`;
    
    return formattedDate;
  }
  