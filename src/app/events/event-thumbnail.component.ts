import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
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
                <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
        <div class="col-md-2">
        <img src="/assets/images/basic-shield.png" />
        </div>
        </div>
    </div>
    `,
    styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: red; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;
    someProperty: any = 'some value';

    // tslint:disable-next-line: typedef
    logFoo() {
        console.log('foo');
    }

}
