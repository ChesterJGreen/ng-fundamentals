import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
    <div class="row">
        <div class="col-md-10">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span>&nbsp;</span>
                <span>{{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
        <div class="col-md-2">
        <img src="/assets/images/basic-shield.png" />
        </div>    
        </div>
    </div>
    `
})
export class EventThumbnailComponent {
    @Input() event: any
    someProperty: any = "some value"

    logFoo() {
        console.log('foo')
    }
   
}