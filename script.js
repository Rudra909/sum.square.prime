function find_sum(f)
{
    var i,sum=0;
    for(i=0;i<=f;i++)
    {
        sum=sum+i;
    }
    window.alert(sum);
}
function square_sum(f)
{
    var i,sum=0;
    for(i=0;i<=f;i++)
    {
        sum=sum+(i*i);
    }
    window.alert(sum); 
}
function prime_sum(f)
{
    var i,j=f,sum=0,l=2;
    while(j)
    {
        for(i=2;i<l;i++)
        {
            if(l%i==0)
            {
                break;
            } 
        }    
            if(i==l)
            {
                sum=sum+l;
                j--;
            }
                l++;  
    }
window.alert(sum)
}
