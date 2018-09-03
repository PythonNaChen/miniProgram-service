<!--数据详情、数据填写-->
<template>
    <div class="baby-detail" style="font-weight: 800;">
        <div class="formula_total">
            <p class="date"><img src="https://www.360myhl.com/meixinJF/MM/ximg/formula_icon_03.png" alt="">{{title}}
            </p>
        </div>
        <span class="submit" @click="submitForm()">提交数据</span>
        <!--宝宝体温-->
        <ul class="info-list" v-if="selectIndex === 'b0'">
            <li>
                <span>宝宝体温（℃）</span>
                <input maxlength="2" type="text" placeholder="输入体温，如 36" v-model="baby_temperature">
            </li>
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="DateChange">
                    <span type="default">选择测量日期</span>
                </picker>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
                    <span type="default">选择测量时间</span>
                </picker>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--身体/体重/头围-->
        <ul class="info-list" v-if="selectIndex === 'b1'">
            <li>
                <span>身长：</span>
                <input type="text" placeholder="cm" v-model="baby_height" maxlength="2">
            </li>
            <li>
                <span>体重：</span>
                <input type="text" placeholder="kg" v-model="baby_weight" maxlength="2">
            </li>
            <li>
                <span>头围：</span>
                <input type="text" placeholder="cm" v-model="head_circumference" maxlength="2">
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--早启蒙教育-->
        <ul class="info-list" v-if="selectIndex === 'b2'">
            <li>
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">选择早启蒙教育</span>
                </picker>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--脐带护理-->
        <ul class="info-list" v-if="selectIndex === 'b3'">
            <li>
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">选择脐带护理</span>
                </picker>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" id="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--黄疸观察-->
        <ul class="info-list" v-if="selectIndex === 'b4'">
            <li>
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">黄疸观察</span>
                </picker>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--喂养记录-->
        <ul class="info-list" v-if="selectIndex === 'b5'">
            <li>
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">喂养记录</span>
                </picker>
                <em style="text-align: right;">{{feeding_patterns}}</em>
            </li>
        </ul>
        <ul class="info-list" v-if="feeding_patterns === '母乳喂养'">
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="s_DateChange">
                    <span type="default">选择开始日期</span>
                </picker>
                <em style="text-align: right;">{{start_date}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="s_TimeChange">
                    <span type="default">选择母乳喂养开始时间</span>
                </picker>
                <em style="text-align: right;">{{start_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <ul class="info-list" v-if="feeding_patterns === '人工喂养'">
            <li>
                <input type="text" placeholder="80" v-model="milliliter"><span>/ml</span>
            </li>
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="s_DateChange">
                    <span type="default">选择开始日期</span>
                </picker>
                <em style="text-align: right;">{{start_date}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="s_TimeChange">
                    <span type="default">选择母乳喂养开始时间</span>
                </picker>
                <em style="text-align: right;">{{start_time}}</em>
            </li>

            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="e_DateChange">
                    <span type="default">选择结束日期</span>
                </picker>
                <em style="text-align: right;">{{end_date}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="e_TimeChange">
                    <span type="default">选择母乳喂养结束时间</span>
                </picker>
                <em style="text-align: right;">{{end_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <ul class="info-list" v-if="feeding_patterns === '辅食喂养'">
            <li>
                <span>种 类：</span>
                <input type="text" placeholder="奶粉" v-model="foodClass">
            </li>
            <li>
                <span>数 量：</span>
                <input type="text" placeholder="250（克）" v-model="foodNumber">
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--宝宝沐浴-->
        <ul class="info-list" v-if="selectIndex === 'b6'">
            <li>
                <span>沐浴次数：</span>
                <input maxlength="2" type="text" placeholder="0" v-model="times">
            </li>
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="DateChange">
                    <span type="default">选择沐浴日期</span>
                </picker>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
                    <span type="default">选择沐浴时间</span>
                </picker>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--皮肤观察-->
        <ul class="info-list" v-if="selectIndex === 'b7'">
            <li>
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">皮肤观察</span>
                </picker>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li v-if="selected_value === '其它' " style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--大便观察-->
        <ul class="info-list" v-if="selectIndex === 'b8'">
            <li style="overflow: hidden">
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">大便观察</span>
                </picker>
                <em style="text-align: right;margin-right: -70%;"
                    v-if="selected_value === '正常' ">{{selected_value}}</em>
                <em style="text-align: right;">{{other}}</em>
            </li>
            <li v-if="abnormal">
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">请选择异常状态</span>
                </picker>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--小便观察-->
        <ul class="info-list" v-if="selectIndex === 'b9'">
            <li style="overflow: hidden">
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">小便观察</span>
                </picker>
                <em style="text-align: right;margin-right: -70%;"
                    v-if="selected_value === '正常' ">{{selected_value}}</em>
                <em style="text-align: right;">{{other}}</em>
            </li>
            <li v-if="abnormal">
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">异常状态</span>
                </picker>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
        </ul>
        <!--睡眠观察-->
        <ul class="info-list" v-if="selectIndex === 'b10'">
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="s_DateChange">
                    <span type="default">选择开始日期</span>
                </picker>
                <em style="text-align: right;">{{start_date}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="s_TimeChange">
                    <span type="default">选择开始时间</span>
                </picker>
                <em style="text-align: right;">{{start_time}}</em>
            </li>

            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="e_DateChange">
                    <span type="default">选择结束日期</span>
                </picker>
                <em style="text-align: right;">{{end_date}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="e_TimeChange">
                    <span type="default">选择结束时间</span>
                </picker>
                <em style="text-align: right;">{{end_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--呼吸观察-->
        <ul class="info-list" v-if="selectIndex === 'b11'">
            <li>
                <input maxlength="2" type="text" v-model="times" placeholder="56" style="float: left;"><span
                    style="float: left;">次/分</span>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--奶具消毒-->
        <ul class="info-list" v-if="selectIndex === 'b12'">
            <li>
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">奶具消毒</span>
                </picker>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>

        <!--妈妈体温-->
        <ul class="info-list" v-if="selectIndex === 'm0'">
            <li>
                <span>测量体温：</span>
                <input maxlength="2" type="text" placeholder="℃" v-model="mm_temperature">
            </li>
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="DateChange">
                    <span type="default">选择测量日期</span>
                </picker>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
                    <span type="default">选择测量时间</span>
                </picker>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--做月子餐-->
        <ul class="info-list" v-if="selectIndex === 'm1'">
            <li>
                <span>餐点名称：</span>
                <input type="text" placeholder="红烧肉" v-model="foodName">
            </li>
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="DateChange">
                    <span type="default">选择用餐日期</span>
                </picker>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
                    <span type="default">选择用餐时间</span>
                </picker>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--身体护理-->
        <ul class="info-list" v-if="selectIndex === 'm2'">
            <li>
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">身体护理</span>
                </picker>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--胸部护理-->
        <ul class="info-list" v-if="selectIndex === 'm3'">
            <li>
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">胸部护理</span>
                </picker>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--恶露观察-->
        <ul class="info-list" v-if="selectIndex === 'm4'">
            <li>
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">恶露观察</span>
                </picker>
                <em style="text-align: right;margin-right: -70%;"
                    v-if="selected_value === '正常' ">{{selected_value}}</em>
                <em style="text-align: right;">{{other}}</em>
            </li>
            <li v-if="abnormal">
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">异常状态</span>
                </picker>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--经络按摩-->
        <ul class="info-list" v-if="selectIndex === 'm5'">
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="s_DateChange">
                    <span type="default">选择开始日期</span>
                </picker>
                <em style="text-align: right;">{{start_date}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="s_TimeChange">
                    <span type="default">选择开始时间</span>
                </picker>
                <em style="text-align: right;">{{start_time}}</em>
            </li>

            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="e_DateChange">
                    <span type="default">选择结束日期</span>
                </picker>
                <em style="text-align: right;">{{end_date}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="e_TimeChange">
                    <span type="default">选择结束时间</span>
                </picker>
                <em style="text-align: right;">{{end_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--形体操指导-->
        <ul class="info-list" v-if="selectIndex === 'm6'">
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="s_DateChange">
                    <span type="default">选择开始日期</span>
                </picker>
                <em style="text-align: right;">{{start_date}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="s_TimeChange">
                    <span type="default">选择开始时间</span>
                </picker>
                <em style="text-align: right;">{{start_time}}</em>
            </li>

            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="e_DateChange">
                    <span type="default">选择结束日期</span>
                </picker>
                <em style="text-align: right;">{{end_date}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="e_TimeChange">
                    <span type="default">选择结束时间</span>
                </picker>
                <em style="text-align: right;">{{end_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--腹带塑身-->
        <ul class="info-list" v-if="selectIndex === 'm7'">
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="s_DateChange">
                    <span type="default">选择开始日期</span>
                </picker>
                <em style="text-align: right;">{{start_date}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="s_TimeChange">
                    <span type="default">选择开始时间</span>
                </picker>
                <em style="text-align: right;">{{start_time}}</em>
            </li>

            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="e_DateChange">
                    <span type="default">选择结束日期</span>
                </picker>
                <em style="text-align: right;">{{end_date}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="e_TimeChange">
                    <span type="default">选择结束时间</span>
                </picker>
                <em style="text-align: right;">{{end_time}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--清洗与消毒-->
        <ul class="info-list" v-if="selectIndex === 'm8'">
            <li>
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default">清洗与消毒</span>
                </picker>
                <em style="text-align: right;">{{selected_value}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <!--用药记录-->
        <ul class="info-list" v-if="selectIndex === 'm9'">
            <li>
                <picker class="weui-btn" @change="PickerChange" :value="indexPicker" :range="array">
                    <span type="default" style="display: flex"><i
                            style="color: #ea5a42">{{selected_object}} </i>用药记录</span>
                </picker>
            </li>
        </ul>
        <ul class="info-list" v-if="selected_object === '妈妈'">
            <li>
                <span>药品名称：</span>
                <input type="text" placeholder="XXX急支糖浆" v-model="drug_name">
            </li>
            <li>
                <span>用量：</span>
                <input type="text" placeholder="50ml" v-model="use_level">
            </li>
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="DateChange">
                    <span type="default">选择用药日期</span>
                </picker>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
                    <span type="default">选择用药时间</span>
                </picker>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
        <ul class="info-list" v-if="selected_object === '宝宝'">
            <li>
                <span>药品名称：</span>
                <input type="text" placeholder="XXX急支糖浆" v-model="drug_name">
            </li>
            <li>
                <span>用量：</span>
                <input type="text" placeholder="50ml" v-model="use_level">
            </li>
            <li>
                <picker class="weui-btn" mode="date" :value="date" start="1999-01-01" end="2099-01-01"
                        @change="DateChange">
                    <span type="default">选择用药日期</span>
                </picker>
                <em style="text-align: right;">{{MT}}</em>
            </li>
            <li>
                <picker class="weui-btn" mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
                    <span type="default">选择用药时间</span>
                </picker>
                <em style="text-align: right;">{{selectedTime}}</em>
            </li>
            <li style="height: 170px;">
                <textarea name="" cols="30" rows="10" placeholder="请输入其它情况" v-model="otherQuestions"></textarea>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        title: '', // 标题
        selectIndex: "", // 选项索引
        orderid: "",
        indexPicker: 1,
        array: [],
        feeding_patterns: "", // 喂养方式
        selected_object: "", // 用药对象
        baby_temperature: "", // 宝宝体温
        mm_temperature: "", // 妈妈体温
        date: "2018-09-01", // 默认显示日期
        time: "12:01", // 默认显示时间
        MT: "",// 测量时间
        selectedTime: "", //选中的时间
        head_circumference: "", // 头围
        baby_height: "", // 宝宝身高
        babt_weight: "", // 宝宝体重
        selected_value: "", // 单列选择器的选项
        start_date: "", // 开始日期
        end_date: "", // 结束日期
        start_time: "", // 开始时间
        end_time: "", // 结束时间
        milliliter: "", // 毫升 ml
        times: "", // 记录次数
        foodName: "", // 食物名字
        use_level: "", // 药品用量
        drug_name: "", // 药品名称
        abnormal: false, // 正常 - true 异常 - false
        other: "", // 用于临时存储一级级联的选项
        foodClass: "", // 用于存储 食物种类
        foodNumber: "", // 用于存储 食物数量
        otherQuestions: "" // 选择器 选择 “其它” 的时候显示textarear输入框
      };
    },
    watch: {},
    methods: {
      // 单列选择器
      PickerChange(e) {
        console.log("选中的值为：" + this.array[e.mp.detail.value]);
        this.feeding_patterns = this.array[e.mp.detail.value]; // 喂养方式
        this.selected_object = this.array[e.mp.detail.value]; // 用药记录
        this.selected_value = this.array[e.mp.detail.value]; // 单选选中的值
        this.times = this.array[e.mp.detail.value]; // 次数

        // 大便观察
        if (this.selectIndex === "b8") {
          if (this.selected_value === "异常") {
            this.other = this.selected_value; // 将“异常”存储到other里
            this.selected_value = ""; // 修改文本内容为空
            this.abnormal = true; // 打开二级单选
            this.array = ["绿色大便", "血色大便", "泡沫状大便", "奇臭大便", "发亮大便", "蛋花样大便", "豆腐渣样大便", "水样大便", "黑便"];// 设置二级单选的选项
          }
        }
        // 小便观察
        if (this.selectIndex === "b9") {
          if (this.selected_value === "异常") {
            this.other = this.selected_value; // 将“异常”存储到other里
            this.selected_value = ""; // 修改文本内容为空
            this.abnormal = true; // 打开二级单选
            this.array = ["深黄色（茶色）", "血尿", "尿频", "尿痛", "其它"];// 设置二级单选的选项
          }
        }
        // 恶露观察
        if (this.selectIndex === "m4") {
          if (this.selected_value === "异常") {
            this.other = this.selected_value; // 将“异常”存储到other里
            this.selected_value = ""; // 修改文本内容为空
            this.abnormal = true; // 打开二级单选
            this.array = ["量太少、恶臭", "恶露不绝", "恶露不净"];// 设置二级单选的选项
          }
        }
      },
      // 日期选择器
      DateChange(e) {
        console.log("选中的日期为：" + e.mp.detail.value);
        this.MT = e.mp.detail.value; // 选中的日期
      },
      // 日期选择器-开始
      s_DateChange(e) {
        console.log("选中的日期为：" + e.mp.detail.value);
        this.start_date = e.mp.detail.value; // 选中的日期
      },
      // 日期选择器-结束
      e_DateChange(e) {
        console.log("选中的日期为：" + e.mp.detail.value);
        this.end_date = e.mp.detail.value; // 选中的日期
      },
      // 时间选择器
      TimeChange(e) {
        console.log("选中的时间为：" + e.mp.detail.value);
        this.selectedTime = e.mp.detail.value; //  选中的时间
      },
      // 开始时间选择器
      s_TimeChange(e) {
        console.log("开始的时间为：" + e.mp.detail.value);
        this.start_time = e.mp.detail.value; //  选中的时间
      },
      // 结束时间选择器
      e_TimeChange(e) {
        console.log("结束的时间为：" + e.mp.detail.value);
        this.end_time = e.mp.detail.value; //  选中的时间
      },

      // 提交表单
      submitForm() {
        switch (this.selectIndex) {
          case "b0":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabytw",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.baby_temperature, // 详细信息
                remk: this.otherQuestions, // 备注
                creatimeYS: this.selectedTime, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: this.MT, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main?" });
                }
              }
            });
            break;
          case "b1":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabycl",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.baby_height + "/" + this.baby_weight + "/" + this.head_circumference, // 详细信息
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: 0, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "b2":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabyqm",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: 0, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "b3":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabyqd",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: 0, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "b4":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabyhd",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: 0, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "b5":
            if (this.feeding_patterns === "母乳喂养") {
              wx.request({
                url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabywy",
                method: "GET",
                data: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.feeding_patterns,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: this.start_date + " " + this.start_time, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: wx.getStorageSync('yname') // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                },
                success: function(res) {
                  if (res) {
                    console.log("submitForm", res);
                    wx.redirectTo({ url: "/pages/logs_record/main" });
                  }
                }
              });
            } else if (this.feeding_patterns === "人工喂养") {
              wx.request({
                url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabywy",
                method: "GET",
                data: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.feeding_patterns + "/" + this.milliliter,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: this.start_date + " " + this.start_time, // 起始时间
                  creatimeYE: this.end_date + " " + this.end_time, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: wx.getStorageSync('yname') // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                },
                success: function(res) {
                  if (res) {
                    console.log("submitForm", res);
                    wx.redirectTo({ url: "/pages/logs_record/main" });
                  }
                }
              });
            } else if (this.feeding_patterns === "辅食喂养") {
              wx.request({
                url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabywy",
                method: "GET",
                data: {
                  orderid: this.orderid, // 订单编号
                  detailed: this.feeding_patterns + "/" + this.foodClass + "/" + this.foodNumber,
                  remk: this.otherQuestions, // 备注
                  creatimeYS: 0, // 起始时间
                  creatimeYE: 0, // 结束时间
                  creatimeM: 0, // 年月日
                  yname: wx.getStorageSync('yname') // 月嫂名字
                },
                header: {
                  "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                },
                success: function(res) {
                  if (res) {
                    console.log("submitForm", res);
                    wx.redirectTo({ url: "/pages/logs_record/main" });
                  }
                }
              });
            }
            break;
          case "b6":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabymy",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.times,
                remk: this.otherQuestions, // 备注
                creatimeYS: this.selectedTime, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: this.MT, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "b7":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabypf",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: 0, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "b8":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabydb",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.other + "/" + this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: 0, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "b9":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabyxb",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.other + "/" + this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: 0, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "b10":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabysm",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: 0,
                remk: this.otherQuestions, // 备注
                creatimeYS: this.start_date + " " + this.start_time, // 起始时间
                creatimeYE: this.end_date + " " + this.end_time, // 结束时间
                creatimeM: 0, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            this.start_date = ""; // 开始日期
            this.end_date = ""; // 结束日期
            this.start_time = ""; // 开始时间
            this.end_time = ""; // 结束时间
            break;
          case "b11":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabyhx",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.times,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: 0, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "b12":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRbabynj",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: 0, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "m0":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRmothertw",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.mm_temperature,
                remk: this.otherQuestions, // 备注
                creatimeYS: this.selectedTime, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: this.MT, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "m1":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRmotheryzc",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.foodName,
                remk: this.otherQuestions, // 备注
                creatimeYS: this.selectedTime, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: this.MT, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "m2":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRmotherhl",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: "", // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "m3":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRmotherxbhl",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: "", // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "m4":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRmotherel",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.other + "/" + this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: "", // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "m5":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRmotherjl",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.other + "/" + this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: this.start_date + " " + this.start_time, // 起始时间
                creatimeYE: this.end_date + " " + this.end_time, // 结束时间
                creatimeM: "", // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            this.start_date = ""; // 开始日期
            this.end_date = ""; // 结束日期
            this.start_time = ""; // 开始时间
            this.end_time = ""; // 结束时间
            break;
          case "m6":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRmotherxtc",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.other + "/" + this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: this.start_date + " " + this.start_time, // 起始时间
                creatimeYE: this.end_date + " " + this.end_time, // 结束时间
                creatimeM: "", // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            this.start_date = ""; // 开始日期
            this.end_date = ""; // 结束日期
            this.start_time = ""; // 开始时间
            this.end_time = ""; // 结束时间
            break;
          case "m7":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRmotherfd",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.other + "/" + this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: this.start_date + " " + this.start_time, // 起始时间
                creatimeYE: this.end_date + " " + this.end_time, // 结束时间
                creatimeM: "", // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            this.start_date = ""; // 开始日期
            this.end_date = ""; // 结束日期
            this.start_time = ""; // 开始时间
            this.end_time = ""; // 结束时间
            break;
          case "m8":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRmotherxd",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.selected_value,
                remk: this.otherQuestions, // 备注
                creatimeYS: 0, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: "", // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
          case "m9":
            wx.request({
              url: "https://www.360myhl.com/meixinJF/xcx/SaveRmotheryy",
              method: "GET",
              data: {
                orderid: this.orderid, // 订单编号
                detailed: this.selected_value + "/" + this.drug_name + "/" + this.use_level,
                remk: this.otherQuestions, // 备注
                creatimeYS: this.selectedTime, // 起始时间
                creatimeYE: 0, // 结束时间
                creatimeM: this.MT, // 年月日
                yname: wx.getStorageSync('yname') // 月嫂名字
              },
              header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
              },
              success: function(res) {
                if (res) {
                  console.log("submitForm", res);
                  wx.redirectTo({ url: "/pages/logs_record/main" });
                }
              }
            });
            break;
        }
      }
    },
    onLoad(options) {
      switch (options.index) {
        case"b0":
          this.title = "宝宝体温";
          break;
        case"b1":
          this.title = "测量";
          break;
        case"b2":
          this.title = "早教启蒙";
          break;
        case"b3":
          this.title = "脐带护理";
          break;
        case"b4":
          this.title = "黄疸观察";
          break;
        case"b5":
          this.title = "喂养记录";
          break;
        case"b6":
          this.title = "沐浴";
          break;
        case"b7":
          this.title = "皮肤观察";
          break;
        case"b8":
          this.title = "大便观察";
          break;
        case"b9":
          this.title = "小便观察";
          break;
        case"b10":
          this.title = "睡眠观察";
          break;
        case"b11":
          this.title = "呼吸观察";
          break;
        case"b12":
          this.title = "奶具消毒";
          break;
        case"m0":
          this.title = "妈妈体温";
          break;
        case"m1":
          this.title = "做月子餐";
          break;
        case"m2":
          this.title = "身体护理";
          break;
        case"m3":
          this.title = "胸部护理";
          break;
        case"m4":
          this.title = "恶露观察";
          break;
        case"m5":
          this.title = "经络按摩";
          break;
        case"m6":
          this.title = "形体操指导";
          break;
        case"m7":
          this.title = "腹带塑身";
          break;
        case"m8":
          this.title = "清洗与消毒";
          break;
        case"m9":
          this.title = "用药记录";
          break;
        case"m10":
          this.title = "小儿推拿";
          break;
      }
      console.log("yname", wx.getStorageSync("yname"));
      console.log("dataDetail-options", options);
      this.selectIndex = options.index;
      this.orderid = options.orderid;
      this.array = [];  // 清空 单列选择器 的数组
      this.baby_temperature = "";  // 清空 宝宝体温
      this.mm_temperature = "";  // 清空 妈妈体温
      this.head_circumference = "", // 头围
        this.baby_height = "", // 宝宝身高
        this.babt_weight = "", // 宝宝体重
        this.feeding_patterns = ""; // 清空喂养方式
      this.selected_value = ""; // 清空 单列选择器选中的值
      this.selected_object = ""; // 清空用药对象
      this.times = ""; // 清空记录次数
      this.MT = ""; // 清空年月日
      this.selectedTime = ""; // 清空起始时分
      this.start_time = ""; // 清空开始时间 时：分
      this.end_time = ""; // 清空结束时间 时：分
      this.start_date = ""; // 清空开始日期 年月日
      this.end_date = ""; // 清空结束日期 年月日
      this.abnormal = false; // 清除异常状态
      this.other = ""; // 清除存储一级单选的值
      this.foodName = "", // 清除 食物名字
        this.use_level = "", // 清除 药品用量
        this.drug_name = "", // 清除 药品名称
        this.other = "", // 清除 用于临时存储一级级联的选项
        this.foodClass = "", // 清除 食物种类
        this.foodNumber = ""; // 清除 食物数量
      this.otherQuestions = ""; // 清除 其他情况描述
      switch (options.index) {
        case "b2":
          this.array = ["抚触", "被动操", "音乐互动", "儿歌", "早教卡片"];
          break;
        case "b3":
          this.array = ["已护理 正常", "已护理 部脱落后未愈合", "已护理 脐部红肿", "已护理 脓性分沁物", "已护理 脐部炎症", "其它"];
          break;
        case "b4":
          this.array = ["病理性黄疸", "生理性黄疸", "母乳性黄疸", "其它"];
          break;
        case "b5":
          this.array = ["母乳喂养", "人工喂养", "辅食喂养"];
          break;
        case "b7":
          this.array = ["正常", "湿疹 ", "尿布疹", "皮肤溃烂", "蚊虫叮咬", "过敏", "其它"];
          break;
        case "b8":
          this.array = ["正常", "异常"];
          break;
        case "b9":
          this.array = ["正常", "异常"];
          break;
        case "b12":
          this.array = ["紫外线消毒", "高温消毒 ", "消毒器消毒"];
          break;
        case "m2":
          this.array = ["身体擦试", "无伤口 ", "伤口护理"];
          break;
        case "m3":
          this.array = ["乳房清洁", "乳腺疏通 ", "凹陷处理", "皲裂处理", "其它"];
          break;
        case "m4":
          this.array = ["正常", "异常"];
          break;
        case "m8":
          this.array = ["多次", "两次 ", "一次"];
          break;
        case "m9":
          this.array = ["妈妈", "宝宝"];
          break;
      }
      var myDate = new Date(); //获取系统当前时间
      let thisYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      let thisMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      let thisDay = myDate.getDate(); //获取当前日(1-31)
      let thisHour = myDate.getHours(); //获取当前小时数(0-23)
      let thisMinutes = myDate.getMinutes(); //获取当前分钟数(0-59)
      let nowDate = thisYear + "-" + thisMonth + "-" + thisDay + " " + thisHour + ":" + thisMinutes;
      this.MT = `${thisYear}-${thisMonth}-${thisDay}`; // 设置默认显示 年月日
      this.selectedTime = `${thisHour}:${thisMinutes}`; // 设置默认显示 时分
      console.log(nowDate);
    }
  };
</script>

<style scoped>
    input {
        color: #808080;
    }

    .baby-detail img {
        width: 15px;
        height: 15px;
        vertical-align: middle;
        padding-right: 10px;
    }

    .baby-detail .info-list li {
        height: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-bottom: 1px solid #8f8e8e;
        padding: 0 20px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        font-size: 14px;
    }

    .formula_total {
        display: flex;
        background-color: #fbf1e7;
        height: 44px;
        line-height: 44px;
    }

    .formula_total img {
        width: 15px;
        height: 20px;
        padding: 0 17px 0 30px;
        vertical-align: text-bottom;
    }

    .formula_total .date {
        width: 80%;
        font-size: 16px;
        font-weight: bold;
    }

    .submit {
        font-size: 14px;
        background-color: #ea5a42;
        color: #ffffff;
        padding: 3px 5px;
        border-radius: 7px;
        position: fixed;
        top: 8px;
        right: 20px;
    }

    input {
        text-align: right;
    }
</style>