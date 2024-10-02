import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-mentions',
  templateUrl: './angular-mentions.component.html',
  styleUrl: './angular-mentions.component.scss',
})
export class AngularMentionsComponent {
  public htmlDoc: HTMLElement;

  public mentionConfig = {
    items: [
      { username: 'noah', label: 'Noah', img: '42143138' },
      { username: 'liam', label: 'Liam', img: '42143139' },
      { username: 'mason', label: 'Mason', img: '42143140' },
      { username: 'jacob', label: 'Jacob', img: '42143141' },
    ],
    mentionSelect: (e: any) => {
      return '##' + e.label + '##';
    },
  };

  itemSelected(event: any) {
    setTimeout(() => {
      this.htmlDoc = document.getElementById('my-content');
      this.htmlDoc.innerHTML = this.htmlDoc.innerHTML.replace(
        '##' + event.label + '##',
        ' <b style="background:red" onclick="this.remove()">' +
          event.label +
          '</b>&nbsp;',
      );
      this.selectEnd();
    }, 0);
  }

  selectEnd() {
    let range, selection;
    range = document.createRange();
    range.selectNodeContents(this.htmlDoc);
    range.collapse(false);
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
