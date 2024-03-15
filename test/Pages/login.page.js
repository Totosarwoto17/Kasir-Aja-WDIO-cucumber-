class LoginPage {
    get userNameInput() {return $('#email');}
  
    get passwordInput() {return $('#password');}

    get loginButton() { return $("//button[@type='submit'][contains(.,'login')]"); }

    get lblKasirAja() { return $("//h3[contains(.,'kasirAja')]"); }
    
    get sidebarDashboard() { return $("//div[@class='css-1xmlai3'][contains(.,'dashboard')]"); }

    get sidebarPenjualan() { return $("//div[@class='css-1xmlai3'][contains(.,'penjualan')]"); }

    get sidebarPembelian() { return $("//div[@class='css-1xmlai3'][contains(.,'pembelian')]"); }

    get sidebarkategori() { return $("//div[@class='css-1xmlai3'][contains(.,'kategori')]"); }

    get sidebarProduk() { return $("//div[@class='css-1xmlai3'][contains(.,'produk')]"); }

    get sidebarPengguna() { return $("//div[@class='css-1xmlai3'][contains(.,'pengguna')]"); }

    get sidebarPelanggan() { return $("//div[@class='css-1xmlai3'][contains(.,'pelanggan')]"); }

    async open() {
      await browser.url('https://kasiraja.ajikamaludin.id/');
    }
    async login(username, password) {
      await this.userNameInput.setValue(username);
      await this.passwordInput.setValue(password);
      await this.loginButton.click();
    }

    async validatepage() {
        await(await this.lblKasirAja).waitForDisplayed();
        await(await this.sidebarDashboard).waitForDisplayed();
        await(await this.sidebarDashboard).waitForClickable();
        await(await this.sidebarPenjualan).waitForDisplayed();
        await(await this.sidebarPenjualan).waitForClickable();
        await(await this.sidebarPembelian).waitForDisplayed();
        await(await this.sidebarPembelian).waitForClickable();
        await(await this.sidebarkategori).waitForDisplayed();
        await(await this.sidebarkategori).waitForClickable();
        await(await this.sidebarPengguna).waitForDisplayed();
        await(await this.sidebarPengguna).waitForClickable();
        await(await this.sidebarPelanggan).waitForDisplayed();
        await(await this.sidebarPelanggan).waitForClickable();
      }






  }
  
  module.exports = new LoginPage();
  