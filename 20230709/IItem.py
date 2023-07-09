from abc import ABCMeta, abstractclassmethod
from Material import *;

class IItem(metaclass=ABCMeta):
    @abstractclassmethod
    def Update(self, material : Material):
        pass
    
    @abstractclassmethod
    def GetResult(self):
        pass

class ItemBase(IItem, metaclass=ABCMeta):
    def Update(self, material : Material):
        self._material : Material = material
    
    @abstractclassmethod
    def GetResult(self):
        pass
        

class ItemA(ItemBase):
    def GetResult(self):
        return self._material.A + self._material.B + self._material.C;

class ItemB(ItemBase):
    def GetResult(self):
        return self._material.B + self._material.C;