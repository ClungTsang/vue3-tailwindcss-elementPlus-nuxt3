import Http from '@/utils/http'

export default new class interaction extends Http {
  public getTopics(id: String) {
    return this.get<ResponseData<any>>(`/topic/${id}`)
  }
}
