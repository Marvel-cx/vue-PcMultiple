<template>
	<div class="sales-board">
		<div class="sales-board-intro">
			<h2>广告发布</h2>
			<p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
		</div>
		<div class="sales-board-form">
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					购买数量：
				</div>
				<div class="sales-board-line-right">
					<v-counter :max="100" :min="20"></v-counter>
				</div>
			</div>
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					行业：
				</div>
				<div class="sales-board-line-right">
					<v-selection :selections="tradeList"></v-selection>
				</div>
			</div>
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					产品版本：
				</div>
				<div class="sales-board-line-right">
					<v-mul-chooser :selections="versionList"></v-mul-chooser>
				</div>
			</div>
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					有效时间：
				</div>
				<div class="sales-board-line-right">
					半年
				</div>
			</div>
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					总价：
				</div>
				<div class="sales-board-line-right">
					500元
				</div>
			</div>
			<div class="sales-board-line">
				<div class="sales-board-line-left">&nbsp;</div>
				<div class="sales-board-line-right">
					<div class="button">
						立即购买:
					</div>
					<div class="button" @click="togglePlaying">
						播放/暂停: <i :class="playIcon"></i>
					</div>
					<el-button>默认按钮</el-button>
					<el-button type="primary">主要按钮</el-button>
					<el-button type="text">文字按钮</el-button>
				</div>
			</div>
		</div>
		<bro @click="change" @listenToChildEvent="showMsgFromChild"></bro>
		<young-bro :broMessage="broMessage"></young-bro>
		<div class="sales-board-des">
			<h2>产品说明</h2>
			<p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>

			<table class="sales-board-table">
				<tbody>
					<tr class="ui-table-row">
						<td class="col-first">
							<div class="intro-pic">
								<label>安全安保</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>办公文教</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>彩票</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>车辆物流</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>成人用品</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>出版传媒</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>电脑硬件</label>
							</div>
						</td>
					</tr>
					<tr class="ui-table-row">
						<td class="col-first">
							<div class="intro-pic">
								<label>电子电工</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>房地产建筑装修</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>分类平台</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>服装鞋帽</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>箱包饰品</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>化工原料制品</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>机械设备</label>
							</div>
						</td>
					</tr>
					<tr class="ui-table-row">
						<td class="col-first">
							<div class="intro-pic">
								<label>家庭日用品</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>家用电器</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>教育培训</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>节能环保</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>金融服务</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>礼品</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>旅游住宿</label>
							</div>
						</td>
					</tr>
					<tr class="ui-table-row">
						<td class="col-first">
							<div class="intro-pic">
								<label>美容化妆</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>母婴护理</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>农林牧渔</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>软件</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>商务服务</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>生活服务</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>食品保健品</label>
							</div>
						</td>
					</tr>
					<tr class="ui-table-row">
						<td class="col-first">
							<div class="intro-pic">
								<label>手机数码</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>通讯服务设备</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>网络服务</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>医疗服务</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>游戏</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>运动休闲娱乐</label>
							</div>
						</td>
						<td>
							<div class="intro-pic">
								<label>招商加盟</label>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div id="myChart" :style="{height: '300px'}">

		</div>

		<div id="myechart1" :style="{height: '300px',margin:'10px'}">

		</div>
	</div>
</template>

<script>
	import VSelection from '../../components/base/selection'
	import VCounter from '../../components/base/counter'
	import VMulChooser from '../../components/base/multiplyChooser'
	import Bro from '../../components/Bro'
	import YoungBro from '../../components/YoungBro'
	import { mapGetters, mapMutations } from 'vuex'
	import bus from '../../common/js/bus'
	export default {
		components: {
			VSelection,
			VCounter,
			VMulChooser,
			Bro,
			YoungBro
		},
		data() {
			return {
				broMessage: '',
				tradeList: [{
						label: '出版业',
						value: 0
					},
					{
						label: '媒体',
						value: 1
					},
					{
						label: '金融',
						value: 2
					},
					{
						label: '互联网',
						value: 3
					},
					{
						label: '游戏',
						value: 4
					}
				],
				versionList: [{
						label: '初级版',
						value: 0
					},
					{
						label: '中级版',
						value: 1
					},
					{
						label: '高级版',
						value: 2
					},
					{
						label: '专家版',
						value: 3
					}
				],
				playing: false
			}
		},
		computed: {
			playIcon() {
				return this.playing ? 'icon-pause' : 'icon-play'
			}
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					title: { text: 'echarts' },
					tooltip: {},
					xAxis: {
						data: ["1", "2", "3", "4", "5", "6"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}]
				});
			},
			drawPie() {
				let myChart1 = this.$echarts.init(document.getElementById('myechart1'))

				myChart1.setOption({
					backgroundColor: '#2c343c',

					title: {
						text: 'Customized Pie',
						left: 'center',
						top: 20,
						textStyle: {
							color: '#ccc'
						}
					},

					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},

					visualMap: {
						show: false,
						min: 80,
						max: 600,
						inRange: {
							colorLightness: [0, 1]
						}
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						center: ['50%', '50%'],
						data: [
							{ value: 335, name: '直接访问' },
							{ value: 310, name: '邮件营销' },
							{ value: 274, name: '联盟广告' },
							{ value: 235, name: '视频广告' },
							{ value: 400, name: '搜索引擎' }
						].sort(function(a, b) { return a.value - b.value; }),
						roseType: 'radius',
						label: {
							normal: {
								textStyle: {
									color: 'rgba(255, 255, 255, 0.3)'
								}
							}
						},
						labelLine: {
							normal: {
								lineStyle: {
									color: 'rgba(255, 255, 255, 0.3)'
								},
								smooth: 0.2,
								length: 10,
								length2: 20
							}
						},
						itemStyle: {
							normal: {
								color: '#c23531',
								shadowBlur: 200,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						},

						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function(idx) {
							return Math.random() * 200;
						}
					}]
				});
			},
			showMsgFromChild(msg) {
				this.broMessage = msg
			},
			togglePlaying() {
				this.playing = !this.playing
				console.log(this.playing)
			},
			change() {
				this.setDefault("111")
			},
			...mapMutations({
				setDefault: 'SET_DEFAULT'
			})
		},
		mounted() {
			this.drawLine()
			this.drawPie()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>