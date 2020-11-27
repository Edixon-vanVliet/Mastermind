const getAllIndexes = (arr: any[], val: any) => {
	var indexes = [],
		i;
	for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
	return indexes;
}

export default getAllIndexes;