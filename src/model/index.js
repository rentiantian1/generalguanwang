module.exports = class extends think.Model {
async index(p) {
    console.log('11111111111111', p)
    let field = "a.name,a.age";
    let first = this.model('test');
    first._pk = 'name';
    return await first.alias('a').field(field).select();
}

};
