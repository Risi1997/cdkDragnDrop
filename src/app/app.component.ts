import { Component, } from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  // the array of 64 items.
  items=[
    {value:1, color: 'red'}, {value:2, color: 'green'}, {value:3, color: 'yellow'}, {value:4, color: 'blue'},
    {value:5, color: 'black'}, {value:6, color: 'pink'},{value:7, color: 'brown'},  {value:8, color: 'orange'},

    {value:9, color: 'red'}, {value:10, color: 'green'}, {value:11, color: 'yellow'}, {value:12, color: 'blue'},
    {value:13, color: 'black'}, {value:14, color: 'pink'}, {value:15, color: 'brown'}, {value:16, color: 'orange'},

    {value:17, color: 'red'}, {value:18, color: 'green'}, {value:19, color: 'yellow'}, {value:20, color: 'blue'},
    {value:21, color: 'black'}, {value:22, color: 'pink'}, {value:23, color: 'brown'}, {value:24, color: 'orange'},

    {value:25, color: 'red'}, {value:26, color: 'green'}, {value:27, color: 'yellow'}, {value:28, color: 'blue'},
    {value:29, color: 'black'}, {value:30, color: 'pink'}, {value:31, color: 'brown'}, {value:32, color: 'orange'},

    {value:33, color: 'red'}, {value:34, color: 'green'}, {value:35, color: 'yellow'},{value:36, color: 'blue'},
    {value:37, color: 'black'}, {value:38, color: 'pink'}, {value:39, color: 'brown'},{value:40, color: 'orange'},

    {value:41, color: 'red'}, {value:42, color: 'green'}, {value:43, color: 'yellow'},{value:44, color: 'blue'},
    {value:45, color: 'black'}, {value:46, color: 'pink'}, {value:47, color: 'brown'},{value:48, color: 'orange'},
    
    {value:49, color: 'red'},{value:50, color: 'green'},{value:51, color: 'yellow'},{value:52, color: 'blue'},
    {value:53, color: 'black'},{value:54, color: 'pink'},{value:55, color: 'brown'},{value:56, color: 'orange'},

    {value:57, color: 'red'},{value:58, color: 'green'},{value:59, color: 'yellow'},{value:60, color: 'blue'},
    {value:61, color: 'black'},{value:62, color: 'pink'},{value:63, color: 'brown'},{value:64, color: 'orange'}
  ];
  
  /** this method uses CdkDragDrop is a event which is emitted when the user drag or drops a div inside the drop zone. The cdkGroupList on html connects multiple node items to other node items and groups them inside the drop zone for the elements to be dropped.
   cdkDropList is the container in which the item was dropped.
   cdkDropListOrientation defines the horizontal/vertical orientation of the list.
   cdkDropListDropped event when the list is dropped in drop zone.
   cdkDrag defines item that is being dropped.
   cdkDragPlaceholder element that will be used as a template for the placeholder of a CdkDrag when it is being dragged.
   previousContaniner is the container from which the item was picked up.
   contaniner is the container on which the item will be dropped.
  */
  drop(event: CdkDragDrop<any>) {
    this.items[event.previousContainer.data.index]=event.container.data.item
    this.items[event.container.data.index]=event.previousContainer.data.item
    event.currentIndex=0;
    console.log(event.previousContainer.data,'-->',event.container.data)
  }
}
