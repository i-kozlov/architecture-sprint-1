class Api {
  constructor({ address, token, groupId }) {
    // стандартная реализация -- объект options
    this._token = token;
    this._groupId = groupId;
    this._address = address;

    // Запросы в примере работы выполняются к старому Api, в новом URL изменены.
  }

  //todo?
  getAppInfo() {
    //тут спорно - можем на это уровне инциализировать конструкторы для получения getUserInfo и getCardList
    //чтобы иметь единые параметры, а можем передать на уровень микросевисов
    return Promise.all([this.getCardList(), this.getUserInfo()]);
  }





}

const api = new Api({
  address: 'https://nomoreparties.co',
  groupId: `cohort0`,
  token: `80a75492-21c5-4330-a02f-308029e94b63`,
});

export default api;
