Feature: Produk Tests

  Scenario: User successfully open Page Produk
    Given I open the KasirAja website
    When I login with valid credentials
    Then I successfully login KasirAja
    When I click sidebarmenu Produk
    Then I should be on the Produk page

  Scenario: user can Click Tambah  Produk page new Produk in kasirAja
    Given I open the page sidebarmenu Produk KasirAja
    When I Click button Tambah
    Then I successfully Direct Dasboard Create Produk

  Scenario: user can Delete Kode When Input New Kode Produk
    Given I open the page Produk Create
    When I input kode on page Create Produk
    Then I successfully Delete kode When input  new Kode Produk display

  Scenario: user  can Input nama Produk with combination numbers When letters
    Given I open the page Produk Create
    When I input nama on page Create Produk
    Then I successfully Input When display nama  Produk 

 Scenario: user can input Deskripsi  Produk  From field Deskripsi
    Given I open the page Produk Create
    When I input Deskripsi on page Create Produk
    Then I successfully Input When display Deskripsi  Produk

  Scenario: User can save product with empty code field
    Given I open the page Produk Create
    When I delete kode When kode is empty
    When user fill harga beli
    When user fill harga jual
    When user fill stok
    When user select kategori
    When user Click button submit
    Then user can't  save Produk When Display notif code is not allowed to be empty

   Scenario: user success simpan product when  input harga jual less than  harga beli 
    Given I open the page Produk Create
    When I fill code Produk
    When I input harga beli
    When I input harga jual
    When I click button simpan
    Then user can't  save Produk When Display notif price must be greater than ref:cost

    Scenario: user success simpan product when  input harga jual  same  harga beli
    Given I open the page Produk Create
    When I input harga beli same with harga jual
    When I input harga jual same with harga beli
    When I click simpan
    Then user can't  save Produk When Display notif

    Scenario: user success simpan product when  without select Category 
    Given I open the page menu Produk Create
    When user fill input data kode
    When user fill input data nama
    When user fill input data Deskripsi
    When user fill nilai harga beli
    When user fill nilai harga jual
    When user fill stok barang
    When I click tombol simpan
    Then user can't  save Produk can Display notif "category_id" is required
    
    Scenario: user can Click button simpan and success add produk 
    Given I open the page menu create Produk
    When user input data kode
    When user input data nama
    When user input data Deskripsi
    When user nilai harga beli
    When user nilai harga jual
    When user fill field stok barang
    When user Select kategori
    When I click button simpan
    Then user successfully Create Produk and can data display on Dasboard






 
    
  

  

