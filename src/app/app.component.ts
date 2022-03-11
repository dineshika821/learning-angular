import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sMap = new Map<number, any>();
  arr = [
    { name: 'Lahiru', id: 101 },
    { name: 'Nimal', id: 102 },
    { name: 'Thamali', id: 103 },
    { name: 'Dineshika', id: 104 },
    { name: 'Pradeep', id: 105 },
  ];

  onCheck(v: boolean, m: {id: number, name: string}) {
    // console.log(v)
    if(v){
      this.sMap.set(m.id, m);
    } else {
      this.sMap.delete(m.id);
    }
    console.log(this.sMap.has(103))
  }
  clear(){
    this.sMap.clear();
  }
  print(): {}[] {
    const a = Array.from(this.sMap.values());
    return a;
  }
}
