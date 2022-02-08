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
        <img class="image" src="/assets/images/basic-shield.png" />
        </div>
        </div>
    </div>
    `,
    styles: [`
    .pad-left { margin-left: 10px; }
    .pad-right { margin-right: 10px; }
    .well div { color: #bbb; }
    .row { min-height: 210 px; }
    .image { height: 90px; width: 90px; }
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
