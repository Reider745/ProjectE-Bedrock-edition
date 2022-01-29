const api = {
Core: Core,
Table: Table,
Pedestal: Pedestal,
requireGlobal(cmd){
eval(cmd);
}
}
ModAPI.registerAPI("ProjectE", api);
