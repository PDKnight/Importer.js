try
{
	/* foo doesn't exist in window object */
	alert(foo);
}
catch(ex){}
finally
{
	/* but bar does */
	alert(bar); // hello, Importer!
}