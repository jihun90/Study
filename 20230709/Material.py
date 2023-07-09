class Material():
    def __init__(self, a, b, c):
        self.__a = a;
        self.__b = b;
        self.__c = c;


    @property
    def A(self):
        return self.__a;

    @A.setter
    def A(self, value):
        self.__a = value;


    @property
    def B(self):
        return self.__b;

    @B.setter
    def B(self, value):
        self.__b = value;


    @property
    def C(self):
        return self.__c;

    @C.setter
    def C(self, value):
        self.__c = value;