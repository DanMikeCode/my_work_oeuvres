import{Host,h}from"@stencil/core";export class ScTable{render(){return h(Host,null,h("slot",null))}static get is(){return"sc-table-head"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-table-head.scss"]}}static get styleUrls(){return{$:["sc-table-head.css"]}}}