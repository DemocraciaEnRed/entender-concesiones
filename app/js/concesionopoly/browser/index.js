import Engine from '../engine'
import Modals from './modals'

export default class Browser {
  constructor (options = {}) {
    this.el = options.el

    this.engine = new Engine()
    this.modals = new Modals({ wrapper: this.el })
  }
}
