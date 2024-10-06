export const getInitials = (name: string): string => {
   // Split the name by spaces
   const words = name.split(" ");
   // First letter of the first word
   const firstInitial = words[0] ? words[0][0].toUpperCase() : "";
   // First letter of the second word
   const secondInitial = words[1] ? words[1][0].toUpperCase() : "";

   return firstInitial + secondInitial; // Concatenate initials
};
