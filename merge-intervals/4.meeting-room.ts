/*
    Problem Description

    You are given an array of meeting time intervals:

    intervals[i] = [starti, endi]

    Each interval represents the start and end time of a meeting.

    You need to determine:

    Can a person attend all meetings?

    A person can attend all meetings only if no meetings overlap.

    Two meetings overlap if:

    meeting1.end > meeting2.start
    ✅ Example 1
    Input:
    [[0,30],[5,10],[15,20]]

    Output:
    false

    Why?

    Meeting 1 : 0 ----------- 30
    Meeting 2 :      5 ---10

    Overlap exists.

    So person cannot attend both.

    ✅ Example 2
    Input:
    [[7,10],[2,4]]

    Output:
    true

    After arranging:

    [2,4]
    [7,10]

    No overlap.

    Person can attend both.

    Constraints

    0 <= intervals.length <= 10^4

    start < end

    Time values up to 10^6
*/