describe('Search', function () {

  it('will the medical issue provides a list of doctors', function() {
    expect(medicalIssue).toEqual(15);
  });

  it('will the name of a doctore provides a list of doctors', function() {
    let doctorName = Bob
    expect(nameMatch).toEqual(5);
  });

  it('will the name of a doctore provides a list of doctors', function() {
    let doctorName = Bob
    expect(fistnameMatch).toEqual(placeholder);
    expect(lastnameMatch).toEqual(placeholder);
    expect(addressMatch).toEqual(address);
    expect(phonenumberMatch).toEqual(234-456-7890);
    expect(newpatientMatch).toEqual(Yes);
  });

  it('will return an error message if API is not sucessful', function() {
    let doctorName = Bob
    expect(nameMatch).toEqual(errormassage);
  });

  it('will return a message is there are no match for the search', function() {
    let doctorName = Bob
    expect(nameMatch).toEqual('there are no match for this search in your area');
  });

});
