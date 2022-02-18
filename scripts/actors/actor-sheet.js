export class MalifauxActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["ttb-character", "actor", "talents"],
            height: 750,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "abilities" }],
            dragDrop: [
                { dragSelector: ".item-list .item", dropSelector: null }
            ]
        });
    }

    // Picks between available/listed templates
    get template() {
        const path = "systems/ttb-malifaux/templates/ttb"
        return `${path}/${this.actor.data.type}-sheet.html`;
    }

    get actorData() {
        return this.actor.data;
    }

    get actorProperties() {
        return this.actorData.data;
    }

    getData() {

    }
}