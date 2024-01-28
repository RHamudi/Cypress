describe('MysticSNKRS', ()=> {
	it("Login", () => {
		cy.visit("https://mysticsnkrs.vercel.app/");
		cy.get("span[class='text-lg']").click();
		cy.get("input[name='email']").type("ramonramos.silva19@gmail.com");
		cy.get("input[name='password']").type("ramonramos");
		cy.get("button[type='submit']").click();
		cy.get("span:nth-child(3)", {timeout: 60000}).click();
	})
})