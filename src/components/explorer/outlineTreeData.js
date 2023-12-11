const outlineTreeData = {
  Properties: {
    type: 'folder',
    children: {
      property1: { type: 'file' },
      property2: { type: 'file' },
    },
  },
  Interfaces: {
    type: 'folder',
    children: {
      interface1: {
        type: 'folder',
        children: {
          subInterface1: { type: 'file' },
          subInterface2: { type: 'file' },
        },
      },
      interface2: { type: 'file' },
    },
  },
  Events: {
    type: 'folder',
    children: {
      event1: { type: 'file' },
      event2: { type: 'file' },
    },
  },
};

export default outlineTreeData;