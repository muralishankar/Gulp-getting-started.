/**
 * alert ME check.
 */
class AlertMe {
    public data:string;
    constructor(parameters:string) {
        this.data=parameters;        
    }
    public alert=function() {
        alert(this.data);
    }
    public alertify=function() {
        alert("dummy");
    }
    public data1:string="dummy content";

}