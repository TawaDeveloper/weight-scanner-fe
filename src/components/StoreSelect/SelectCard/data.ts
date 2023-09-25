export const insertRooNode = (nodes?: defs.store.StoreDetail[]) => {
  if (!nodes || !nodes.length) {
    return [];
  }
  const m = new Map<number, defs.store.StoreDetail>();
  const list: (defs.store.StoreDetail & { leaf: boolean })[] = [];
  nodes?.forEach((i) => {
    list.push({
      ...i,
      leaf: true,
    });
    if (i.groupId && i.groupName && !m.has(i.groupId)) {
      m.set(i.groupId, i);
    }
  });
  const list2: defs.store.StoreDetail[] = [];
  m.forEach((i) => {
    list2.push({
      storeName: i.groupName,
      storeNumber: i.groupId,
      groupId: 0,
    });
  });
  return [...list, ...list2, { storeName: 'All', storeNumber: 0 }];
};
