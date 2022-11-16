export default class APIService {

  static async _getSmth(setSmth, name) {
    let response = await fetch(`/api/${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      setSmth(data)
    }
  }

  static async _getSmthWithToken(setSmth, name, authTokens) {
    let response = await fetch(`/api/${name}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      setSmth(data)
    }
  }

  static async _postSmthWithToken(name, credentials, authTokens) {
    return await fetch(`/api/${name}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      },
      body: JSON.stringify(credentials)
    }).catch(error => alert(error.response.data))
  }

  static async _putSmthWithToken(name, credentials, authTokens) {
    return await fetch(`api/${name}/`, { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      },
      body: JSON.stringify(credentials)
    })
  }

  static async _deleteSmth(name) {
    return await fetch(`/api/${name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  static async createExchangeItem(authTokens, offeredBooks) {
    return await fetch('/api/exchanges/current/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + String(authTokens.access)
      },
      body: JSON.stringify({
        // 'offered_books': [
        //   {
        //     'title': 'string',
        //     'author': 'string',
        //     'genre':  'Роман',
        //     'description': 'string',
        //     'user': '0e4bb72e-80f4-43ad-b7f8-b7ed26eb3db5',
        //   },
        //   {
        //     'title': 'poikopi',
        //     'author': 'opipo',
        //     'genre':  'Роман',
        //     'description': 'лждц',
        //     'user': '0e4bb72e-80f4-43ad-b7f8-b7ed26eb3db5',
        //   },
        // ],
        'offered_books': offeredBooks,
        'requirements_text': 'string',
        'address': 'string',
      })
    })
  }

  static async getCurrentUser(setCurrentUser, authTokens) {
    this._getSmthWithToken(setCurrentUser,'/users/current', authTokens)
  }

  static async getOneUser(setUser, userSlug) {
    this._getSmth(setUser, `/users/${userSlug}`)
  }

  static async getCurrentBookItems(setBookItems, authTokens) {
    this._getSmthWithToken(setBookItems, '/books/current', authTokens)
  }

  static async getCurrentExchangeItems(setExchangeItems, authTokens) {
    this._getSmthWithToken(setExchangeItems, '/exchanges/current', authTokens)
  }

  static async getBookItemsForUser(setBookItems, userSlug) {
    this._getSmth(setBookItems, `/books/for-user/${userSlug}`)
  }

  static async getExchangeItemsForUser(setExchangeItems, userSlug) {
    this._getSmth(setExchangeItems, `/exchanges/for-user/${userSlug}`)
  }

  static async getExchangeItems(setExchangeItems) {
    this._getSmth(setExchangeItems, '/exchanges/')
  }

  static async getOneExchangeItem(setExchangeItem, exchangeSlug){
    this._getSmth(setExchangeItem, `/exchanges/${exchangeSlug}`)
  }

  static async getOneBookItem(setBookItem, bookSlug) {
    this._getSmth(setBookItem, `/books/${bookSlug}`)
  }

  static async createBookItem(credentials, authTokens){
    this._postSmthWithToken('books/current', credentials, authTokens)
  }

  static async changeProfile(credentials, authTokens){
    this._putSmthWithToken('/users/current', credentials, authTokens)
  }

  static async deleteBookItem(bookItemSlug){
    this._deleteSmth(`/books/${bookItemSlug}`)
  }

  static async deleteExchangeItem(exchangeItemSlug){
    this._deleteSmth(`/exchanges/${exchangeItemSlug}`)
  }
}