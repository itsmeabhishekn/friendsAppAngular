import { Component } from '@angular/core';

@Component({
  selector: 'app-friend-search',
  templateUrl: './friend-search.component.html',
  styleUrls: ['./friend-search.component.css']
})
export class FriendSearchComponent {

name =""

readValues = () =>
{
  let data = {"name":this.name}
  console.log(data)
}

}
