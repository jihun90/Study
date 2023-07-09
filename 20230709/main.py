from Material import *;
from IItem import *;

if (__name__ == '__main__'):
    isItemA = True;
    # isItemA = False;

    item : IItem;
    if isItemA:
        item = ItemA(); # 6
    else :
        item = ItemB(); # 5

    item.Update(Material(1,2,3));
    print(item.GetResult());



