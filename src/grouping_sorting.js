const groupAndSortTickets = (groupBy, sortBy, tickets, users) => {
  
    const normalizedGroupBy = groupBy.toLowerCase();
    const normalizedSortBy = sortBy.toLowerCase();
  

    const enhancedTickets = tickets.map(ticket => {
      const user = users.find(user => user.id === ticket.userId);
      return { ...ticket, user };
    });
  
 
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
  
   
    Object.keys(groupedTickets).forEach(key => {
      groupedTickets[key].sort((a, b) => {
        if (normalizedSortBy === 'priority') {
          return b.priority - a.priority; 
        } else if (normalizedSortBy === 'title') {
          return a.title.localeCompare(b.title); 
        }
        return 0;
      });
    });
  
  
    const result = Object.entries(groupedTickets).map(([key, groupTickets]) => ({
      headerData: { [normalizedGroupBy]: key },
      data: groupTickets
    }));

    result.sort((a, b) => {
      const aValue = a.headerData[normalizedGroupBy];
      const bValue = b.headerData[normalizedGroupBy];
      if (normalizedGroupBy === 'priority') {
        return Number(bValue) - Number(aValue);
      } else if (normalizedGroupBy === 'user') {
        return String(aValue).localeCompare(String(bValue)); 
      } else if (normalizedGroupBy === 'status') {
      
        const order = { 'Todo': 1, 'In progress': 2, 'Backlog': 3 };
        return order[aValue] - order[bValue];
      }
      return String(aValue).localeCompare(String(bValue));
    });
    console.log ( result)
    return result;
  };

export default groupAndSortTickets; 