const groupAndSortTickets = (groupBy, sortBy, tickets, users) => {
    // Normalize groupBy and sortBy to lowercase
    const normalizedGroupBy = groupBy.toLowerCase();
    const normalizedSortBy = sortBy.toLowerCase();
  
    // Step 1: Enhance tickets with user details
    const enhancedTickets = tickets.map(ticket => {
      const user = users.find(user => user.id === ticket.userId);
      return { ...ticket, user };
    });
  
    // Step 2: Group tickets
    const groupedTickets = enhancedTickets.reduce((acc, ticket) => {
      let key;
      switch (normalizedGroupBy) {
        case 'status':
          key = ticket.status;
          break;
        case 'user':
          key = ticket.user.name;
          break;
        case 'priority':
          key = ticket.priority;
          break;
        default:
          key = 'Unknown';
      }
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(ticket);
      return acc;
    }, {});
  
    // Step 3: Sort tickets within each group
    Object.keys(groupedTickets).forEach(key => {
      groupedTickets[key].sort((a, b) => {
        if (normalizedSortBy === 'priority') {
          return b.priority - a.priority; // Higher priority first
        } else if (normalizedSortBy === 'title') {
          return a.title.localeCompare(b.title); // Ascending order
        }
        return 0;
      });
    });
  
    // Step 4: Create the final structure
    const result = Object.entries(groupedTickets).map(([key, groupTickets]) => ({
      headerData: { [normalizedGroupBy]: key },
      data: groupTickets
    }));
  
    // Step 5: Sort the groups if necessary
    result.sort((a, b) => {
      const aValue = a.headerData[normalizedGroupBy];
      const bValue = b.headerData[normalizedGroupBy];
      if (normalizedGroupBy === 'priority') {
        return Number(bValue) - Number(aValue); // Higher priority first
      } else if (normalizedGroupBy === 'user') {
        return String(aValue).localeCompare(String(bValue)); // Alphabetical order
      } else if (normalizedGroupBy === 'status') {
        // Custom order: Todo, In progress, Backlog
        const order = { 'Todo': 1, 'In progress': 2, 'Backlog': 3 };
        return order[aValue] - order[bValue];
      }
      return String(aValue).localeCompare(String(bValue));
    });
    console.log ( result)
    return result;
  };

export default groupAndSortTickets; 