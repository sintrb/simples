class Solution(object):
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        arr = []
        for row in range(numRows):
            sarr = [1 for _ in range(row+1)]
            for i in range(1, row/2+1):
                parr = arr[row-1]
                sarr[row-i] = sarr[i] = parr[i-1]+parr[i]
            arr.append(sarr)
        return arr




ct = 15
for ix,row in enumerate(Solution().generate(ct)):
	print (ct-ix) * '  ',
	for r in row:
		print '{:^3}'.format(r),
	print
