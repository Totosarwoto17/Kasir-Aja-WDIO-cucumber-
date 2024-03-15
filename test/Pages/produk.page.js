class ProdukPage {

    get lblDasboardProduk() { return $("//h2[contains(.,'dashboard  / produk')]"); }
    
    get btnTambah() { return $("//a[@href='/products/create']"); }

    get tblHeadProduk() { return $$("th.css-jfypmb"); }

    get fieldCari() { return $("//input[contains(@placeholder,'cari')]"); }

    get buttonTitik3() { return $("(//button[@class='chakra-button chakra-menu__menu-button css-pu8osu'])[1]"); }

    get sidebarProduk() { return $("//div[@class='css-1xmlai3'][contains(.,'produk')]"); }

    get sidebarPengguna() { return $("//div[@class='css-1xmlai3'][contains(.,'pengguna')]"); }

    get sidebarPelanggan() { return $("//div[@class='css-1xmlai3'][contains(.,'pelanggan')]"); }
    //page Create Produk
    get lblKode() { return $("//label[contains(@id,'kode-label')]"); }
    get FieldKode() { return $("//input[@id='kode']"); }
    get lblnama() { return $("//label[contains(@id,'nama-label')]"); }
    get Fieldnama() { return $("//input[@id='nama']"); }
    get lbldeskripsi() { return $("//label[contains(@id,'deskripsi-label')]"); }
    get Fielddeskripsi() { return $("//input[@id='deskripsi']"); }
    get lblhargabeli() { return $("//label[contains(@id,'harga beli-label')]"); }
    get Fieldhargabeli() { return $("//input[@id='harga beli']"); }
    get lblhargajual() { return $("//label[contains(@id,'harga jual-label')]"); }
    get Fieldhargajual() { return $("//input[@id='harga jual']"); }
    get lblstok() { return $("//label[contains(@id,'stok-label')]"); }
    get Fieldstok() { return $("//input[@id='stok']"); }
    get lblkategori() { return $("//label[contains(@id,'kategori-label')]"); }
    get Fieldkategori() { return $("//input[contains(@id,'kategori')]"); }
    get btnsimpan() { return $("//button[contains(.,'simpan')]"); }
    //popup kategori
    get textkategoryPopup() { return $("//header[contains(.,'kategori')]"); }
    get CarikategoryPopup() { return $("//input[contains(@placeholder,'cari')]"); }
    get btnClose() { return $("//button[contains(@aria-label,'Close')]"); }




   
    



    async open() {
      await browser.url('https://kasiraja.ajikamaludin.id/');
    }

    async login(username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
  
    async validateTable(){
        let header = ['CODE', 'NAMA', 'KATEGORI', 'HARGA BELI', 'HARGA JUAL', 'STOK', 'TOTAL JUAL', 'TOTAL BELI', 'DESKRIPSI',""]
        for (let i = 0; i < header.length; i++) {
            // validasi Table header Produk 
            await expect(this.tblHeadProduk[i]).toHaveText(header[i]);
        }
    } 

    async ClikButtonTambah() {
        await (await this.btnTambah).waitForDisplayed();
        await (await this.btnTambah).waitForClickable();
        await (await this.btnTambah).click();
      }

    async ClickTitik3(params){
        await (await this.buttonTitik3).waitForDisplayed()
        await (await this.buttonTitik3).waitForClickable()
        await (await this.buttonTitik3).click()
        await (await $(`//a[@role='menuitem'][contains(.,'${params}')]`)).waitForDisplayed();
        await (await $(`//a[@role='menuitem'][contains(.,'${params}')]`)).click();
    } 

    async CariProduk() {
        await (await this.fieldCari).waitForDisplayed();
        await (await this.fieldCari).waitForClickable();
        await (await this.fieldCari).click();
        await (await this.fieldCari).setValue();
    }

    async validatepageCreateProduk() {
        await expect(browser).toHaveUrl('https://kasiraja.ajikamaludin.id/products/create');
        await(await this.lblKode).waitForDisplayed();
        await(await this.FieldKode).waitForDisplayed();
        await(await this.FieldKode).waitForClickable();
        await(await this.lblnama).waitForDisplayed();
        await(await this.Fieldnama).waitForDisplayed();
        await(await this.Fieldnama).waitForClickable();
        await(await this.lbldeskripsi).waitForDisplayed();
        await(await this.Fielddeskripsi).waitForDisplayed();
        await(await this.Fielddeskripsi).waitForClickable();
        await(await this.lblhargabeli).waitForDisplayed();
        await(await this.Fieldhargabeli).waitForDisplayed();
        await(await this.Fieldhargabeli).waitForClickable();
        await(await this.lblhargajual).waitForDisplayed();
        await(await this.Fieldhargajual).waitForDisplayed();
        await(await this.Fieldhargajual).waitForClickable();
        await(await this.lblstok).waitForDisplayed();
        await(await this.Fieldstok).waitForDisplayed();
        await(await this.Fieldstok).waitForClickable();
        await(await this.lblkategori).waitForDisplayed();
        await(await this.Fieldkategori).waitForDisplayed();
        await(await this.Fieldkategori).waitForClickable();
        await(await this.btnsimpan).waitForDisplayed();
        await(await this.btnsimpan).waitForClickable();
    }

    async InputkodeProduk(params) {
        await (await this.FieldKode).click();
        await browser.keys(['Control', 'a', 'Backspace'])
        await expect(await (await this.FieldKode).getValue()).toEqual('')
        await (await this.FieldKode).waitForDisplayed();
        await (await this.FieldKode).waitForClickable();
        await (await this.FieldKode).click();
        await (await this.FieldKode).setValue(params);
    }

    async ValidateInput(params) {
        let Validate = await $(`//input[contains(@value,'${params}')]`)
        await Validate.waitForDisplayed()
        await expect(Validate).toHaveValue(params)
    }


    async InputnamaProduk(params) {
        await (await this.Fieldnama).waitForDisplayed();
        await (await this.Fieldnama).waitForClickable();
        await (await this.Fieldnama).click();
        await (await this.Fieldnama).setValue(params);
    }

    async InputdeskripsiProduk(params) {
        await (await this.Fielddeskripsi).waitForDisplayed();
        await (await this.Fielddeskripsi).waitForClickable();
        await (await this.Fielddeskripsi).click();
        await (await this.Fielddeskripsi).setValue(params);
    }

    async Inputhargabeli(params) {
        await (await this.Fieldhargabeli).waitForDisplayed();
        await (await this.Fieldhargabeli).waitForClickable();
        await (await this.Fieldhargabeli).click();
        await (await this.Fieldhargabeli).setValue(params);
    }

    async Inputhargajual(params) {
        await (await this.Fieldhargajual).waitForDisplayed();
        await (await this.Fieldhargajual).waitForClickable();
        await (await this.Fieldhargajual).click();
        await (await this.Fieldhargajual).setValue(params);
    }

    async Inputstok(params) {
        await (await this.Fieldstok).waitForDisplayed();
        await (await this.Fieldstok).waitForClickable();
        await (await this.Fieldstok).click();
        await (await this.Fieldstok).setValue(params);
    }

    async PilihKategori(params) {
        await (await this.Fieldkategori).waitForDisplayed();
        await (await this.Fieldkategori).waitForClickable();
        await (await this.Fieldkategori).click();
        await this.validatepPopUpKategori();
        const Pilih = await $(`//td[@role='gridcell'][contains(.,'${params}')]`)
        await (Pilih).waitForDisplayed();
        await (Pilih).waitForClickable();
        await (Pilih).click();
    }

    
    async ClikButtonsimpan() {
        await (await this.btnsimpan).waitForDisplayed();
        await (await this.btnsimpan).waitForClickable();
        await (await this.btnsimpan).click();
    }

    
    async validatepPopUpKategori() {
        await(await this.textkategoryPopup).waitForDisplayed();
        await(await this.CarikategoryPopup).waitForDisplayed();
        await(await this.CarikategoryPopup).waitForClickable();
        await(await this.btnClose).waitForDisplayed();
        await(await this.btnClose).waitForClickable();
    }

    
    async DeletekodeProduk() {
        await (await this.FieldKode).click();
        await browser.keys(['Control', 'a', 'Backspace'])
        await expect(await (await this.FieldKode).getValue()).toEqual('')
    }


    async ValidatePopUpRequired(value) {
        switch (value) {
            case 'kode':
                const notifcode = await $(`//div[@role='alert'][contains(.,'"code" is not allowed to be empty')]`)
                await notifcode.waitForDisplayed()
                await expect(notifcode).toHaveText('"code" is not allowed to be empty')
                break;

            case 'nama':
                const nama = await $(`//div[@role='alert'][contains(.,'"name" is not allowed to be empty')]`)
                await nama.waitForDisplayed()
                await expect(nama).toHaveText('"name" is not allowed to be empty')
                break;

            case 'Price':
                const price = await $(`//div[@role='alert'][contains(.,'"price" must be greater than ref:cost')]`)
                await price.waitForDisplayed()
                await expect(price).toHaveText('"price" must be greater than ref:cost')
                break;

            case 'kategori':
                    const kategori = await $(`//div[@role='alert'][contains(.,'"category_id" is required')]`)
                    await kategori.waitForDisplayed()
                    await expect(kategori).toHaveText('"category_id" is required')
                    break;
        }
    }

    async Deletehargabeli() {
        await (await this.Fieldhargabeli).click();
        await browser.keys(['Control', 'a', 'Backspace'])
        await expect(await (await this.Fieldhargabeli).getValue()).toEqual('')
    }

    async Deletehargajual() {
        await (await this.Fieldhargajual).click();
        await browser.keys(['Control', 'a', 'Backspace'])
        await expect(await (await this.Fieldhargajual).getValue()).toEqual('')
    }


    async ValidatedataCreateProduk(params) {
        let Validatedata = await $(`//td[@role='gridcell'][contains(.,'${params}')]`)
        await Validatedata.waitForDisplayed()
        await expect(Validatedata).toHaveText(params)
    }



















  }
  
  module.exports = new ProdukPage();
  