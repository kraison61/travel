import PageCont


const ServicePage = async ({params}:{params:{id:string}}) => {
    const {id} = await params
  return (
    <div>
      <PageContent />
    </div>
  )
}
export default ServicePage