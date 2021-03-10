const firebaseMethods = require('../firebase/ApiMethods');

module.exports = {
    async cadastrar(request, response) {
        const { email, password, cpf, firstName, lastName } = request.body;

        firebaseMethods.cadastrar(email, password, cpf, firstName, lastName);

        return response.JSON("foi");
    }
}