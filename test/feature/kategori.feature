Feature: kategori Tests
  Scenario: User successfully open Page kategori
    Given I open Web Kasir Aja
    When I login with valid username and valid Password
    Then I successfully login web KasirAja
    When I click sidebarmenu Kategori
    Then I should be on the Kategori page

Scenario: User can Klik button Tambah
    Given I should be on the Kategori page
    When I Click Tambah
    Then I should be on the Create Kategori page

Scenario: User can input nama ,Deskripsi and success Create kategori
    Given I should be on the Create Kategori page
    When I input nama kategori
    When I input Deskripsi kategori
    When I click button Simpan
    Then I successfully input and create Kategori

Scenario: User can search data kategori with Deskripsi
    Given I should be on the Kategori page
    When I input search Kategori with Deskripsi
    Then I can't display search Kategori and display no data










 
    
  

  

