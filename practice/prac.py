def find_2d_maxima(points):
    # sort points by x-coordinate
    points = sorted(points)

    # initialize variables
    maxima = []
    max_y = float('-inf')

    # scan from left to right
    for point in points:
        # check if point has higher y-coordinate than current maximum
        if point[1] > max_y:
            maxima.append(point)
            max_y = point[1]

    # scan from right to left
    max_y = float('-inf')
    for point in reversed(points):
        # check if point has higher y-coordinate than current maximum
        if point[1] > max_y:
            # check if point is not already in maxima list
            if point not in maxima:
                maxima.append(point)
            max_y = point[1]

    return maxima


points = [(2, 3), (5, 7), (1, 9), (8, 2), (6, 4)]
maxima = find_2d_maxima(points)
print(maxima)
