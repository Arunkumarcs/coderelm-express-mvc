class Users extends $models.users
{
    static async all() {
        return await Users.findAll();
    }
}

module.exports = Users;