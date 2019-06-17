class Users extends $Db.users
{
    static async all() {
        return await Users.findAll();
    }
}

module.exports = Users;