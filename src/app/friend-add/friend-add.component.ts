import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent {
  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

constructor(private api:ApiService){}


  readValues =()=>
{
let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
console.log(data)

this.api.addFriends(data).subscribe(
  (response:any) => {
console.log(response)

if (response.status="success") {

  alert("friend added succesfully ")

  this.name=""
  this.friendName=""
  this.friendNickName=""
  this.DescribeYourFriend=""

  
} else {
  alert("failed adding friend")
  
}

  })

}




}


