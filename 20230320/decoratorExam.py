import os

def _deco(func):
    def wrapper(self, *args, **kwargs):
        print('deco : ' + str(id(self)))
        print(func(self, *args, **kwargs))
    return wrapper

class Sample:
    @_deco
    def test(self, text):
        print('test : ' + str(id(self)))
        return 'test instance == deco instance'
    
if __name__ == '__main__':
    temp = Sample()
    temp.test('temp')