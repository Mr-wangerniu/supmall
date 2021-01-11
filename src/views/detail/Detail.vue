<template>
  <div class="detail">
    <detail-nav-bar/>
    <better-scroll class="detail-scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods-info="detailInfo"></detail-base-info>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
        <li>33</li>
        <li>34</li>
        <li>35</li>
        <li>36</li>
        <li>37</li>
        <li>38</li>
        <li>39</li>
        <li>40</li>
        <li>41</li>
        <li>42</li>
        <li>43</li>
        <li>44</li>
        <li>45</li>
        <li>46</li>
        <li>47</li>
        <li>48</li>
        <li>49</li>
        <li>50</li>
        <li>51</li>
        <li>52</li>
        <li>53</li>
        <li>54</li>
        <li>55</li>
        <li>56</li>
        <li>57</li>
        <li>58</li>
        <li>59</li>
        <li>60</li>
        <li>61</li>
        <li>62</li>
        <li>63</li>
        <li>64</li>
        <li>65</li>
        <li>66</li>
        <li>67</li>
        <li>68</li>
        <li>69</li>
        <li>70</li>
        <li>71</li>
        <li>72</li>
        <li>73</li>
        <li>74</li>
        <li>75</li>
        <li>76</li>
        <li>77</li>
        <li>78</li>
        <li>79</li>
        <li>80</li>
        <li>81</li>
        <li>82</li>
        <li>83</li>
        <li>84</li>
        <li>85</li>
        <li>86</li>
        <li>87</li>
        <li>88</li>
        <li>89</li>
        <li>90</li>
        <li>91</li>
        <li>92</li>
        <li>93</li>
        <li>94</li>
        <li>95</li>
        <li>96</li>
        <li>97</li>
        <li>98</li>
        <li>99</li>
        <li>100</li>
      </ul>
    </better-scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./detailnavbar/DetailNavBar";
  import DetailSwiper from "./detailswiper/DetailSwiper";
  import DetailBaseInfo from "./detailbaseinfo/DetailBaseInfo";
  import BetterScroll from "components/common/betterscroll/BetterScroll";
  import {getDetail,DetailInfo} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      BetterScroll
    },
    data() {
      return {
        id: null,
        topImages: [],
        detailInfo:{},
        shopInfo: {}
      }
    },
    created() {
      // 1 保存传入的id
      this.id = this.$route.params.id
      // 2 根据id拿到对应的页面数据
      getDetail(this.id).then(res =>{
        // console.log(res.result.itemInfo.topImages);
        // 1 获取数据
        const data = res.result
        console.log(res);
        // 2 取出轮播图图片数据
        this.topImages = data.itemInfo.topImages
        // 3 创建商品的对象
        this.detailInfo = new DetailInfo(data.itemInfo,data.columns,data.shopInfo.services)
        // console.log(this.detailInfo);
        this.shopInfo = data.shopInfo
      })

    },

  }
</script>

<style scoped>
  .detail{
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 1;
  }
  .detail-scroll{
    background-color: #fff;
    height: calc(80% - 47px);
    overflow: hidden;
  }
</style>
