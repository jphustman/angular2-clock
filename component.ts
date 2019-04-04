// our root app component
import {Component, Attribute} from '@angular/core'

@Component({
  selector: 'app-clock',
  templateUrl: './view.html'
})
export class ClockComponent {
    private data;
    private format;
    private timer = true;
    private intervalSet = false;
    constructor(@Attribute('format') format, @Attribute('data') data, @Attribute('timer') timer) {
        let date;
        let milliseconds = 1000;
        this.format = format || 'h:mm:s';
        this.data = data || new Date();
        if (this.timer) {


          // Not sure what this was doing
          // if(typeof this.data !== 'Date') {
          //   this.date = new Date();
          // } else {
          //   date = this.data;
          // }

          this.date = new Date();

          // milliseconds = (60 - date.getSeconds()) * 1000;
          milliseconds = 1000;
          window.setTimeout(() => {this.refreshTime(); }, milliseconds);
        }
    }

    refreshTime() {
        this.data = new Date();
        if (!this.intervalSet) {
            window.setInterval(() => {this.refreshTime(); }, 1000);
            this.intervalSet = true;
        }
    }

}
